import express from 'express';


const app = express();


app.use(express.urlencoded({ extended: true}));

const porta = 3000;
const host = 'localhost';

var listaClientes = [];
function cadastroProdutoView(req, resp) {
    resp.send(`
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Página Principal</title>
                </head>
                <body>
                    <h2>Bem-vindo ao Sistema de Cadastro de Produtos</h2>
                    <p>Último Acesso: <span>{{lastLogin}}</span></p>
                
                    <h3>Cadastrar Produto</h3>
                    <form action="/cadastro" method="POST">
                        <label for="codigo">Código de Barras:</label>
                        <input type="text" id="codigo" name="codigo" required><br>
                
                        <label for="descricao">Descrição:</label>
                        <input type="text" id="descricao" name="descricao" required><br>
                
                        <label for="preco_custo">Preço de Custo:</label>
                        <input type="text" id="preco_custo" name="preco_custo" required><br>
                
                        <label for="preco_venda">Preço de Venda:</label>
                        <input type="text" id="preco_venda" name="preco_venda" required><br>
                
                        <label for="validade">Data de Validade:</label>
                        <input type="date" id="validade" name="validade" required><br>
                
                        <label for="estoque">Estoque:</label>
                        <input type="number" id="estoque" name="estoque" required><br>
                
                        <label for="fabricante">Fabricante:</label>
                        <input type="text" id="fabricante" name="fabricante" required><br>
                
                        <button type="submit">Cadastrar Produto</button>
                    </form>
                
                    <h3>Produtos Cadastrados</h3>
                    <table border="1">
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Preço de Custo</th>
                            <th>Preço de Venda</th>
                            <th>Validade</th>
                            <th>Estoque</th>
                            <th>Fabricante</th>
                        </tr>
                        {{#each products}}
                        <tr>
                            <td>{{this.codigo}}</td>
                            <td>{{this.descricao}}</td>
                            <td>{{this.preco_custo}}</td>
                            <td>{{this.preco_venda}}</td>
                            <td>{{this.validade}}</td>
                            <td>{{this.estoque}}</td>
                            <td>{{this.fabricante}}</td>
                        </tr>
                        {{/each}}
                    </table>
                </body>
                </html>
                
    `);
}

function menuView(req, resp){
    resp.send(`
    
        <html>
            <head>
                <title>Cadastro de AProdutos</title>
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
        </html>
        `);
}

function cadastrarProduto(req, resp){
    const codigo         = req.body.codigo;
    const descricao      = req.body.preco_custo;
    const preco_custo    = req.body.preco_custo;
    const preco_venda    = req.body.preco_venda;
    const validade       = req.body.validade;
    const estoque        = req.body.estoque;
    const fabricante     = req.body.fabricante;

    if (codigo  && descricao && preco_custo  && preco_venda   && validade &&  estoque && fabricante){
       

        const Produto = {codigo,descricao,preco_custo,preco_venda,validade,estoque,fabricante};


        listaProduto.push(Produto);
    

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
                        <th scope="col">codigo</th>
                        <th scope="col">descrição</th>
                        <th scope="col">preço de custo</th>
                        <th scope="col">preço de venda</th>
                        <th scope="col">validade</th>
                        <th scope="col">estoque</th>
                        <th scope="col">fabricante</th>
                    </tr>
                </thead>
                <tbody>`);

                for (var i = 0; i < listaProduto.length; i++){
                    resp.write(`<tr>
                                    <td>${listaProduto[i].codigo}</td>
                                    <td>${listaProduto[i].descricao}</td>
                                    <td>${listaProduto[i].preco_custo}</td>
                                    <td>${listaProduto[i].preco_venda}</td>
                                    <td>${listaProduto[i].validade}</td>
                                    <td>${listaProduto[i].estoque}</td>
                                    <td>${listaProduto[i].fabricante}</td>
                                </tr>
                        `);
                }

    resp.write(`</tbody> 
            </table>
            <button type="submit">Cadastrar Produto</button>
            </body>
        </html>
            `);

    }
  
    else
    {

        resp.write(`
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página Principal</title>
        </head>
        <body>
            <h2>Sistema de Cadastro de Produtos</h2>
            <p>Último Acesso: <span>{{lastLogin}}</span></p>
        
            <h3>Cadastrar Produto</h3>
            <form action="/cadastro" method="POST">
                <label for="codigo">Código de Barras:</label>
                <input type="text" id="codigo" name="codigo"  value="${codigo}" ><br>

        `);
        if (!codigo){
            resp.write(`
                <div>
                    <span><p class="text-danger"> informar o codigo</p></span>
                </div>
                `);
        }
        resp.write(`
                       <label for="descricao">Descrição:</label>
                        <input type="text" id="descricao" name="descricao"   value="${descricao}" ><br>
                
        `);
        if (!descricao){
            resp.write(`
                <div>
                    <span><p class="text-danger">informe a descrição</p></span>
                </div>
                `);
        }
        resp.write(`
                <label for="preco_custo">Preço de Custo:</label>
                <input type="text" id="preco_custo" name="preco_custo"   value="${preco_custo}"><br>


            `);
        if (!preco_custo){
            resp.write(`
                <div>
                    <span><p class="text-danger">nforme o preço do produto</p></span>
                </div>
                `);
        }
        resp.write(`
                <label for="preco_venda">Preço de Venda:</label>
                <input type="text" id="preco_venda" name="preco_venda" value="${preco_venda}" ><br>

            `);

        if (!preco_venda){
            resp.write(`
                <div>
                    <span><p class="text-danger">informe o preço de venda</p></span>
                </div>
                `);
        }
        resp.write(`
          <label for="validade">Data de Validade:</label>
          <input type="date" id="validade" name="validade" value="${validade}" ><br>

       `);
       if (!validade){
        resp.write(`
            <div>
                <span><p class="text-danger">informe a validade</p></span>
            </div>
            `);

         resp.write(`
           
         <label for="estoque">Estoque:</label>
         <input type="number" id="estoque" name="estoque"   value="${estoque}"><br>
  
         `);
         if (!estoque){
          resp.write(`
              <div>
                  <span><p class="text-danger">informe o estoque</p></span>
              </div>
              `);
         }
         resp.write(`
                <label for="fabricante">Fabricante:</label>
                <input type="text" id="fabricante" name="fabricante" value="${fabricante}"><br>
        
         
         `);
         if (!fabricante){
          resp.write(`
              <div>
                  <span><p class="text-danger">informe Oo fabricante</p></span>
              </div>
              `);
         }



        }
        resp.write(`
            </div>
        <div class="col-12">
        <button type="submit">Cadastrar Produto</button>
        </div>
        </form>
    </div>
    </body>
    </html> `);

    } 
 

    resp.end();
}

app.get('/', menuView);
app.get('/cadastrarProduto', cadastroProdutoView); 
app.post('/cadastrarProduto',cadastrarProduto);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}/`);
});