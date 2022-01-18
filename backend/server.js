const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const multer = require("multer"); 
const fs = require('fs')




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
app.use(cors());

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
transport.use(
  "compile",
  hbs({
    viewEngine: {
      extname: ".handlebars",
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  })
);

const storage = multer.diskStorage({
  destination: path.join(__dirname, './public_html/', 'uploads'),
  filename: function (req, file, cb) {   
      // null as first argument means no error
      cb(null,file.originalname )  
  }
})

app.post('/imageupload', async (req, res,next) => {	
  try {
      // 'avatar' is the name of our file input field in the HTML form

      let upload = multer({ storage: storage}).single('avatar');
    
      upload(req, res, function(err) {
          // req.file contains information of uploaded file
          // req.body contains information of text fields
  //console.log(res)

          if (!req.file) {
           
            return res.send(res);
          }
          else if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
          }
          else if (err) {
            return res.status(500).json(err)
          }
  
return res.status(200).send(req.file)
    
          
        }); 
      
    //  return res;
  }catch (err) {
    return res.status(500).json(err)
  }
})

app.post("/send-mail", cors(), async (req, res,next) => {

    let body =  req.body;
    var imagePath = path.join(__dirname, '/public_html/uploads/'+body.DatosCaptura.fileName);
    let mailOptions = {
    from: process.env.EMAIL,
    to:body.DatosUsuario.email,
    subject: `${body.DatosUsuario.name}, haz realizado una transferencia con Nuwy`,
    template: "index",
    context: body

  };

  
  let mailOptionsNuwy = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Han realizado una transferencia",
    template: "nuwySend",
    context: body,
    attachments : [{
      filename:body.DatosCaptura.fileName ,
      path:imagePath,        
      
    }]
  };

  
  await transport.sendMail(mailOptions, (err, data) => {
    if (err) {
      return  res.status(500).json(err)
    } else {
      return res.status(200).send(req)
    }
  });
  await transport.sendMail(mailOptionsNuwy, (err, data) => {
    if (err) {
      fs.unlinkSync(imagePath)
      return  res.status(500).json(err)
      
    } else {
      fs.unlinkSync(imagePath)
      return res.status(200).send(req)
    }
  })

  return res.status(200).send({message:'Correo Enviado!'})
  

});
app.post("/send-mail-contact", async (req, res,next) => {

  try{
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Han realizado una Pregunta`,
      html: `<h5 style="font-size:15px">Recibiste un mensaje de:</h5>
    
     <p style="font-size:15px"><b> Email :</b> ${req.body.email}</p>
     
      <p style="font-size:15px"><b> Name:</b> ${req.body.name}</p>
   
      <p style="font-size:15px"><b>Message:</b> ${req.body.message}</p>`,
    };
    await transport.sendMail(mailOptions, (err, data) => {
      if (err) {
        
        return res.status(500).json(err)
    } else {
      return res.status(200).send(req)
      
    }
  })
  return res.status(200).send(req)
}catch (error) {
  res.send(error);
}

});


app.listen(process.env.PORT||443 , (req,res) => {
  console.log("server activo");
});

//
/*
PASSWORD=Dantestriffe2021**
EMAIL=djimeneztaq@gmail.com
PORT=4000

//step 1

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})
,
    (err, data) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        console.log("CORREO ENVIADO",body);
      }
    }
//step 2

//step 3

transporter.sendMail(mailOptions,(err,data) =>{
    if(err){
        console.log('Error: ', err)
    }else{
        console.log('Correo enviado')
    }
})*/
