import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const adminEmail = "teppei.uchida1421@gmail.com";

    const mailOptionsToUser = {
      from: `【エンジニア】内田 哲平 <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "お問い合わせありがとうございます",
      text: `
      ${data.name}様

      お問い合わせありがとうございます。
      こちらは自動返信メールとなっております。
      内容を確認次第、ご連絡いたしますのでしばらくお待ちくださいませ。

      内田 哲平
      --------------------------

      お名前: ${data.name}
      メールアドレス: ${data.email}
      お電話番号: ${data.phone}
      お問い合わせ内容: ${data.content}
      `,

      html: `
      <p>${data.name}様</p>

      <p>お問い合わせありがとうございます。<br />
      こちらは自動返信メールとなっております。<br />
      内容を確認次第、ご連絡いたしますのでしばらくお待ちくださいませ。

      内田 哲平
      --------------------------

      <p>お名前: ${data.name}</p>
      <p>メールアドレス: ${data.email}</p>
      <p>お電話番号: ${data.phone}</p>
      <p>お問い合わせ内容: ${data.content}</p>
      `
    };

    const mailOptionsToAdmin = {
      from: `内田 哲平 <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `お客様よりお問い合わせ`,
      replyTo: data.email,
      text: `
        お名前: ${data.name}
        メールアドレス: ${data.email}
        お電話番号: ${data.phone}
        お問い合わせ内容: ${data.content}
      `,

      html: `
       <p>お名前: ${data.name}</p>
       <p>メールアドレス: ${data.email}</p>
       <p>お電話番号: ${data.phone}</p>
       <p>お問い合わせ内容: ${data.content}</p>
      `
    };

    await transporter.sendMail(mailOptionsToUser);
    await transporter.sendMail(mailOptionsToAdmin);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "メール送信成功" })
    };
  } catch (error) {
    console.error("Error sending email: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "メール送信に失敗しました",
        details: error.message
      })
    };
  }
};
