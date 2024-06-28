"use client";

import classNames from "classnames";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  content: string;
}

const ContactForm: React.FC = () => {
  const [confirmEmailValue, setConfirmEmailValue] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<FormData>({
    mode: "onChange"
  });

  const email = watch("email");
  useEffect(() => {
    if (email && confirmEmailValue === "") {
      setError("confirmEmail", {
        type: "mismatch",
        message: "確認のためもう一度ご入力ください。"
      });
    } else if (email && email !== confirmEmailValue) {
      setError("confirmEmail", {
        type: "mismatch",
        message: "メールアドレスが一致しません。"
      });
    } else {
      clearErrors("confirmEmail");
    }
  }, [confirmEmailValue, email, setError, clearErrors]);

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    setIsSubmitting(true);
    const { confirmEmail, ...data } = formData;
    const postData = { ...data, "form-name": "info" };
    axios
      .post("/.netlify/functions/sendEmail", postData)
      .then(() => {
        alert("ありがとうございます。メッセージは送信されました。");
        setIsSubmitting(false);
      })
      .catch((error) => {
        alert(error);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <h1 className="font-heading text-center text-4xl sm:text-5xl duration-500">
        CONTACT
      </h1>
      <p className="font-body text-xs mt-5 sm:text-base">
        すべて必須項目となります。
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="info"
        method="POST"
        className="mt-7 w-10/12 mx-auto max-w-2xl"
      >
        <p className="text-xs mb-1 font-body">
          <label htmlFor="name">お名前</label>
        </p>
        <p className="mb-3 w-full overflow-auto">
          <input
            id="name"
            type="text"
            {...register("name", { required: "入力してください。" })}
            className="w-full px-2.5 rounded text-black h-8"
          ></input>
          {errors.name && (
            <>
              {console.log("error")}
              <p style={{ color: "#ff9393" }}>{errors.name.message}</p>
            </>
          )}
        </p>
        <p className="text-xs mb-1 font-body">
          <label htmlFor="email">メールアドレス</label>
        </p>
        <p className="mb-3 w-full overflow-auto">
          <input
            id="email"
            type="email"
            {...register("email", { required: "入力してください。" })}
            className="w-full px-2.5 rounded text-black h-8"
          ></input>
          {errors.email && (
            <p style={{ color: "#ff9393" }}>{errors.email.message}</p>
          )}
        </p>
        <p className="text-xs mb-1 font-body">
          <label htmlFor="confirmEmail">
            メールアドレス※再度ご記入ください
          </label>
        </p>
        <p className="mb-3 w-full overflow-auto">
          <input
            id="confirmEmail"
            type="email"
            {...register("confirmEmail")}
            value={confirmEmailValue}
            onChange={(e) => setConfirmEmailValue(e.target.value)}
            className="w-full px-2.5 rounded text-black h-8"
          ></input>
          {errors.confirmEmail && (
            <p style={{ color: "#ff9393" }}>{errors.confirmEmail.message}</p>
          )}
        </p>
        <p className="text-xs mb-1 font-body">
          <label htmlFor="phone">お電話番号</label>
        </p>
        <p className="mb-3 w-full overflow-auto">
          <input
            id="phone"
            type="tel"
            {...register("phone", { required: "入力してください。" })}
            className="w-full px-2.5 rounded text-black h-8"
          ></input>
          {errors.phone && (
            <p style={{ color: "#ff9393" }}>{errors.phone.message}</p>
          )}
        </p>
        <p className="text-xs mb-1 font-body">
          <label htmlFor="content">問い合わせ内容</label>
        </p>
        <p className="w-full overflow-auto">
          <textarea
            id="content"
            {...register("content", { required: "入力してください。" })}
            className="w-full p-2.5 rounded text-black h-28"
          ></textarea>
          {errors.content && (
            <p style={{ color: "#ff9393" }}>{errors.content.message}</p>
          )}
        </p>
        <div className="w-full text-center mt-5">
          <button
            className={classNames(
              "bg-[#57a6a1] rounded p-2 font-body font-bold",
              {
                ["bg-gray-400"]: isSubmitting
              }
            )}
            type="submit"
            value="上記の内容で送信する"
            disabled={isSubmitting}
          >
            {!isSubmitting ? "上記の内容で送信する" : "送信中です…"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
