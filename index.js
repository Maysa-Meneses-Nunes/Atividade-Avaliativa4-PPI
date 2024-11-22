import express from 'express';


const app = express();


app.use(express.urlencoded({ extended: true}));

const porta = 3000;
const host = 'localhost';

var listaClientes = [];
function cadastroClienteView(req, resp) {
    resp.send(`
            <html> 
     <head>
                <title> Cadastro </title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>  
    <div class="container text-center">
                        <h1 class="mb-5">Cadastro</h1>
                        <form method="POST" action="/cadastrarCliente" class="border p-3 row g-3" novalidate>
                            <div class="col-md-4">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome"  placeholder="Digite seu nome">
                             </div>
                             <div class="col-md-4">
                                <label for="sobrenome" class="form-label">Sobrenome</label>
                                <input type="text" class="form-control" id="sobrenome" name="sobrenome">
    
                             </div>
                             <div class="col-md-4">
                                <label for="CPF" class="form-label">CPF</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend"></span>
                                    <input type="text" class="form-control" id="CPF" name="CPF">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="endereço" class="form-label">Endereço</label>
                                  <input type="text" class="form-control" id="endereço" name="endereço">
                            </div>
                            <div class="col-md-3">
                                <label for="estado" class="form-label">UF</label>
                                <select class="form-select" id="estado" name="estado">
                                    <option selected value="SP">São Paulo</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="numero" class="form-label">Numero</label>
                                <input type="text" class="form-control" id="cep" name="numero">
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                            </div>
                            </form>
                    </div>

    </body>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </html>
    `);
}

function menuView(req, resp){
    resp.send(`
        <html>
            <head>
                <title>Cadastro de Alunos</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            </head>
            <body>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">MENU</a>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="/cadastrarCliente">Cadastrar Cliente</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
        `);
}

function cadastrarCliente(req, resp){
    const nome      = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const  CPF     = req.body.CPF;
    const endereço    = req.body.endereço;
    const estado    = req.body.estado;
    const numero      = req.body.numero;

    if (nome && sobrenome && CPF &&  endereço && estado &&  numero){
       

        const cliente = {nome, sobrenome, CPF, endereço, estado, numero};


        listaClientes.push(cliente);
    

    resp.write(`
        <html>
            <head>
                <title>Clientes Cadastrados</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <meta charset="utf-8">
            </head>
            <body>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">endereço</th>
                        <th scope="col">Estado</th>
                        <th scope="col">numero</th>
                    </tr>
                </thead>
                <tbody>`);

                for (var i = 0; i < listaClientes.length; i++){
                    resp.write(`<tr>
                                    <td>${listaClientes[i].nome}</td>
                                    <td>${listaClientes[i].sobrenome}</td>
                                    <td>${listaClientes[i].CPF}</td>
                                    <td>${listaClientes[i].endereço}</td>
                                    <td>${listaClientes[i].estado}</td>
                                    <td>${listaClientes[i].numero}</td>
                                </tr>
                        `);
                }

    resp.write(`</tbody> 
            </table>
            <a class="btn btn-primary" href="/cadastrarCliente">Continuar Cadastrando</a>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
            `);

    }
  
    else
    {

        const estados = {
            "AC": "Acre",
            "AL": "Alagoas",
            "AP": "Amapá",
            "AM": "Amazonas",
            "BA": "Bahia",
            "CE": "Ceará",
            "DF": "Distrito Federal",
            "ES": "Espírito Santo",
            "GO": "Goiás",
            "MA": "Maranhão",
            "MT": "Mato Grosso",
            "MS": "Mato Grosso do Sul",
            "MG": "Minas Gerais",
            "PA": "Pará",
            "PB": "Paraíba",
            "PR": "Paraná",
            "PE": "Pernambuco",
            "PI": "Piauí",
            "RJ": "Rio de Janeiro",
            "RN": "Rio Grande do Norte",
            "RS": "Rio Grande do Sul",
            "RO": "Rondônia",
            "RR": "Roraima",
            "SC": "Santa Catarina",
            "SP": "São Paulo",
            "SE": "Sergipe",
            "TO": "Tocantins"
        };
        

        resp.write(`
            <html>
                <head>
                    <title>Cadastro</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                    <meta charset="utf-8">
                </head>
                <body>
                    <div class="container text-center">
                        <h1 class="mb-5">Cadastro</h1>
                        <form method="POST" action="/cadastrarCliente" class="border p-3 row g-3" novalidate>
                            <div class="col-md-4">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome"  placeholder="Digite seu nome" value="${nome}">
        `);
        if (!nome){
            resp.write(`
                <div>
                    <span><p class="text-danger">Você deve informar o nome do cliente</p></span>
                </div>
                `);
        }
        resp.write(`</div>
                        <div class="col-md-4">
                        <label for="sobrenome" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="sobrenome" name="sobrenome" value="${sobrenome}">`);
        if (!sobrenome){
            resp.write(`
                <div>
                    <span><p class="text-danger">Você deve informar o sobrenome do cliente</p></span>
                </div>
                `);
        }
        resp.write(`
            </div>
                <div class="col-md-4">
                    <label for="CPF" class="form-label">CPF</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="CPF" name="CPF" value="${CPF}">

            `);
        if (!CPF){
            resp.write(`
                <div>
                    <span><p class="text-danger">Você deve informar o CPF do cliente</p></span>
                </div>
                `);
        }
        resp.write(`
                    </div>
                </div>  
            <div class="col-md-6">
                <label for="endereço" class="form-label">Endereço</label>
                <input type="text" class="form-control" id="endereço" name="endereço" value="${endereço}">
            `);

        if (!endereço){
            resp.write(`
                <div>
                    <span><p class="text-danger">Informe o endereço do cliente</p></span>
                </div>
                `);
        }
        resp.write(`
            </div>
            <div class="col-md-3">
                <label for="estado" class="form-label">UF</label>
                <select class="form-select" id="estado" name="estado">`);
        for (let [sigla, nomeEstado] of Object.entries(estados)){
            if (sigla == estado){
                resp.write(`<option selected value="${sigla}">${nomeEstado}</option>`);
            }
            else{
                resp.write(`<option value="${sigla}">${nomeEstado}</option>`);
            }
            
        }
        resp.write(`
                </select>
            </div>
            <div class="col-md-3">
                <label for="numero" class="form-label">Numero</label>
                <input type="text" class="form-control" id="numero" name="numero" value="${numero}">
            `);
        if (!numero){
            resp.write(`
                <div>
                    <span><p class="text-danger">Informe o numero do cliente</p></span>
                </div>
                `);
        }
        resp.write(`
            </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Cadastrar</button>
        </div>
        </form>
    </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </html> `);

    } 
 

    resp.end();
}

app.get('/', menuView);
app.get('/cadastrarCliente', cadastroClienteView); 
app.post('/cadastrarCliente',cadastrarCliente);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}/`);
});