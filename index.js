const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer"); // import multer
const path = require("path");
const connection = require("./database/database");
const Cadastro = require("./database/Cadastros");


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// config multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});
const upload = multer({ storage: storage });

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com BD feita com sucesso!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });


app.get("/", (req, res) => {
  Cadastro.findAll({ raw: true, order: [["id", 'DESC']] }).then(cadastros => {
    res.render("index", { cadastros: cadastros });
  });
});

app.get("/cadastrar", (req, res) => {
  res.render("cadastrar"); 
});


app.post("/salvarcadastro", upload.single('imagem'), (req, res) => {
  const nome = req.body.nome;
  const imagem = req.file ? req.file.filename : null;
  const descricao = req.body.descricao;
  const preco = req.body.preco;

  Cadastro.create({
    nome: nome,
    imagem: imagem, 
    descricao: descricao,
    preco: preco
  }).then(() => {
    res.redirect("/"); 
  }).catch((err) => {
    res.send("Erro ao salvar o produto: " + err.message); 
  });
});


app.get("/cadastro/:id", (req, res) => {
  var id = req.params.id;
  Cadastro.findOne({
    where: { id: id }
  }).then(cadastro => {
    if (cadastro != undefined) {
      res.render("cadastro", {
        cadastro: cadastro
      });
    } else {
      res.redirect("/");
    }
  });
});


app.listen(5000, () => {
  console.log("App rodando na porta 5000!");
});
