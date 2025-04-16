import React, { useState, useEffect, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Register.module.css';

interface FormData {
    nome: string;
    telefone: string;
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    email: string;
}

const CadastroForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        telefone: '',
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        email: '',
    });
    const [cepError, setCepError] = useState<string | null>(null);

    const handleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length > 0) {
            setFormData({ ...formData, nome: value.charAt(0).toUpperCase() + value.slice(1) });
        } else {
            setFormData({ ...formData, nome: '' });
        }
    };

    const handleTelefoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        }
        if (value.length > 5) {
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
        }
        setFormData({ ...formData, telefone: value });
    };

    const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, cep: event.target.value });
        setCepError(null);
    };

    useEffect(() => {
        if (formData.cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${formData.cep}/json/`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.erro) {
                        setCepError('CEP não encontrado.');
                        setFormData({ ...formData, rua: '', bairro: '', cidade: '' });
                    } else {
                        setFormData({
                            ...formData,
                            rua: data.logradouro,
                            bairro: data.bairro,
                            cidade: data.localidade,
                        });
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar CEP:', error);
                    setCepError('Erro ao buscar CEP.');
                    setFormData({ ...formData, rua: '', bairro: '', cidade: '' });
                });
        } else if (formData.cep.length > 8) {
            setCepError('CEP inválido.');
            setFormData({ ...formData, rua: '', bairro: '', cidade: '' });
        } else {
            setFormData({ ...formData, rua: '', bairro: '', cidade: '' });
            setCepError(null);
        }
    }, [formData.cep, setFormData]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Dados do formulário:', formData);
        // Aqui você faria a lógica de envio dos dados para o servidor
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-4" style={{ maxWidth: '500px', fontFamily: 'Nunito', marginBottom: '40vh' }}>
            <div className="mb-3">
                <label htmlFor="nome" className={styles['form-label']}>Nome</label>
                <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Digite seu nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleNomeChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="telefone" className={styles['form-label']}>Telefone</label>
                <input
                    type="tel"
                    className="form-control"
                    id="telefone"
                    placeholder="Digite seu telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleTelefoneChange}
                    pattern="^\(\d{2}\) \d{4,5}-\d{4}$"
                    title="Formato: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="cep" className={styles['form-label']}>CEP</label>
                <input
                    type="text"
                    className="form-control"
                    id="cep"
                    placeholder="Digite seu CEP"
                    name="cep"
                    value={formData.cep}
                    onChange={handleCepChange}
                    maxLength={8}
                    required
                />
                {cepError && <div className="form-text text-danger">{cepError}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="rua" className={styles['form-label']}>Rua</label>
                <input
                    type="text"
                    className="form-control"
                    id="rua"
                    placeholder="Rua"
                    name="rua"
                    value={formData.rua}
                    readOnly
                />
            </div>

            <div className="mb-3">
                <label htmlFor="bairro" className={styles['form-label']}>Bairro</label>
                <input
                    type="text"
                    className="form-control"
                    id="bairro"
                    placeholder="Bairro"
                    name="bairro"
                    value={formData.bairro}
                    readOnly
                />
            </div>

            <div className="mb-3">
                <label htmlFor="cidade" className={styles['form-label']}>Cidade</label>
                <input
                    type="text"
                    className="form-control"
                    id="cidade"
                    placeholder="Cidade"
                    name="cidade"
                    value={formData.cidade}
                    readOnly
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className={styles['form-label']}>Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Digite seu email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <button type="submit" className={styles['btn-register']}>
                Cadastrar
            </button>
        </form>
    );
};

export default CadastroForm;