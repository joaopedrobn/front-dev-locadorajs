import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import api from '../../services/api';
import toastr from 'toastr';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  const entrar = () => {
    if (!email || !senha) {
      toastr.warning("Preencha todos os campos!");
      return;
    }

    api
      .post("/clientes/login", {
        email: email,
        senha: senha,
      })
      .then((response) => {
        setUser(response.data);
        const userId = response.data.id;
        const prodUser = response.data;

        localStorage.setItem("userId", userId);
        localStorage.setItem("prodUser", JSON.stringify(prodUser));

        toastr.success("Login realizado com sucesso!");
        navigate("/cliente");
      })
      .catch((erro) => {
        console.log(erro);
        toastr.error("Erro ao fazer login.");
      });
  };

  const cadastrarUsuario = () => {
    if (!email || !senha) {
      toastr.warning("Preencha todos os campos!");
      return;
    }

    const nome = email.split('@')[0];

    api
      .post("/clientes", {
        nome: nome,
        email: email,
        telefone: senha, // Se "telefone" for realmente o campo correto
      })
      .then((response) => {
        setUser(response.data);
        toastr.success("Usuário cadastrado!");
        navigate("/login");
      })
      .catch((erro) => {
        console.log(erro);
        toastr.error("Erro ao cadastrar usuário.");
      });
  };

  const sair = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{ position: 'relative', margin: '0 auto' }}>
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Digite o Email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </FormGroup>
                      <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Digite a Senha"
                          value={senha}
                          onChange={e => setSenha(e.target.value)}
                        />
                      </FormGroup>
                      <div className="btn-group d-flex justify-content-center" role="group">
                        <button className="btn btn-success" onClick={entrar}>
                          <i className="pi pi-sign-in"></i> &nbsp; Entrar
                        </button>
                        <button className="btn btn-warning" onClick={cadastrarUsuario}>
                          <i className="pi pi-user-plus"></i> &nbsp; Cadastrar
                        </button>
                        <button className="btn btn-danger" onClick={sair}>
                          <i className="pi pi-sign-out"></i> &nbsp; Sair
                        </button>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
