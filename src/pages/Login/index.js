import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import api from '../../services/api';
import toastr from 'toastr';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const entrar = async e => {
    e.preventDefault(); // impede submit GET

    if (!email || !senha) {
      toastr.warning('Preencha todos os campos!');
      return;
    }

    try {
      setLoading(true);
      const { data } = await api.post(
        '/clientes/login',
        {
          email: email,
          telefone: senha, // mantém "telefone" no backend
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      setUser(data);
      localStorage.setItem('userId', data?.id);
      localStorage.setItem('prodUser', JSON.stringify(data));

      toastr.success('Login realizado com sucesso!');
      navigate('/cliente');
    } catch (erro) {
      console.error(
        'LOGIN ERRO =>',
        erro.response?.status,
        erro.response?.data
      );
      toastr.error(erro.response?.data?.message || 'Erro ao fazer login.');
    } finally {
      setLoading(false);
    }
  };

  const cadastrarUsuario = async () => {
    if (!email || !senha) {
      toastr.warning('Preencha todos os campos!');
      return;
    }

    const nome = email.split('@')[0];

    try {
      setLoading(true);
      const { data } = await api.post(
        '/clientes',
        {
          nome: nome,
          email: email,
          telefone: senha, // permanece telefone
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      setUser(data);
      toastr.success(`Usuário ${data.id} cadastrado com sucesso!`);
      navigate('/login');
    } catch (erro) {
      console.error(
        'CADASTRO ERRO =>',
        erro.response?.status,
        erro.response?.data
      );
      toastr.error(
        erro.response?.data?.message || 'Erro ao cadastrar usuário.'
      );
    } finally {
      setLoading(false);
    }
  };

  const sair = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: 'relative', margin: '0 auto' }}
        >
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    {/* Usa form + onSubmit para garantir POST */}
                    <form onSubmit={entrar}>
                      <fieldset>
                        <FormGroup
                          label="Email: *"
                          htmlFor="exampleInputEmail1"
                        >
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Digite o Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                        </FormGroup>

                        <FormGroup
                          label="Senha: *"
                          htmlFor="exampleInputPassword1"
                        >
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Digite a Senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                          />
                        </FormGroup>

                        <div
                          className="btn-group d-flex justify-content-center"
                          role="group"
                        >
                          <button
                            type="submit"
                            className="btn btn-success"
                            disabled={loading}
                          >
                            <i className="pi pi-sign-in"></i> &nbsp;{' '}
                            {loading ? 'Entrando...' : 'Entrar'}
                          </button>

                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={cadastrarUsuario}
                            disabled={loading}
                          >
                            <i className="pi pi-user-plus"></i> &nbsp; Cadastrar
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={sair}
                          >
                            <i className="pi pi-sign-out"></i> &nbsp; Sair
                          </button>
                        </div>
                      </fieldset>
                    </form>
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
