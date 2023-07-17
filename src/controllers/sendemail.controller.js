import nodemailer from 'nodemailer';


export async function enviarEmail(req, res) {
    console.log(req.body)
    const email = req.body.email
    const assunto = req.body.assunto
    const mensagem = req.body.mensagem
    try {

        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'levymcruz@gmail.com',
            pass: 'jmuyguyrmdoyecrz',
          },
        });
    
        // Opções do email
        const mailOptions = {
          from: 'levymcruz@gmail.com',
          to: email,
          subject: assunto,
          text: mensagem,
        };
    
        // Envio do email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email enviado:', info.messageId);
        res.send({'Email enviado:': info.messageId})
      } catch (error) {
        console.error('Erro ao enviar o email:', error);
      }
}
