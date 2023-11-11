import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Radio, Input, Select, RadioChangeEvent } from 'antd'

import logCambioContrasena from '../../assets/icon/6195699.png'
import { setCentrarImgLogin } from '../../styles/login.styles';
import { ChangeEvent, useState } from 'react';
import ComponentsVerificarCodigo from './ComponentsVerificarCodigo';

const { Option } = Select;
const selectAfter = (
    <Select defaultValue="@gmail.com">
        <Option value="@gmail.com">@gmail.com</Option>
        <Option value="@outlook.com">@outlook.com</Option>
    </Select>
);

const ComponentsCambioContrasena = (props: { setCambioContrasena: () => void }) => {

    const [getEnvioCodigo, setEnvioCodigo] = useState<boolean>(true)
    const [getModal, setModal] = useState<boolean>(false)
    const [getEnviarCodigo, setEnviarCodigo] = useState({ usuario: "", emailOrPhone: "", operacionEmail: true })


    const onChange = (e: RadioChangeEvent) => {
        setEnvioCodigo(e.target.value)
        setEnviarCodigo({ ...getEnviarCodigo, operacionEmail: e.target.value })
    }
    const handleChangeEnviarCodigo = (entrada: boolean) => setModal(entrada)
    const handleChangeEnviar = (e: ChangeEvent<HTMLInputElement>) => {
        setEnviarCodigo({ ...getEnviarCodigo, [e.target.name]: e.target.value })
    }

    return (
        <div className='bg-white p-3'>
            <p className='h5 font-label-app w-100 text-center'>CAMBIO DE CONTRASEÑA</p>
            <div style={{ height: '82vh', textAlign: 'justify' }}>
                <hr />
                <div style={setCentrarImgLogin}>
                    <img src={logCambioContrasena} style={{ height: 165 }} className='img-fluid' alt="IconCambioContrasena" />
                </div>

                <hr />
                <Radio.Group defaultValue={true} onChange={onChange}>
                    <Radio className='font-label-app' value={true}><MailOutlined /> Enviar a correo</Radio>
                    <Radio className='font-label-app' value={false}><PhoneOutlined /> Enviar a teléfono</Radio>
                </Radio.Group>
                <hr />

                <label htmlFor="usuario">Ingrese su usuario :</label>
                <Input name='usuario' id='usuario' placeholder='ingrese su usuario' />
                <hr />
                <label htmlFor="correo-cambio" className='font-label-app'>
                    {getEnvioCodigo ? '* Ingrese su correo :' : '* Ingrese su numero teléfono :'}
                </label>

                {getEnvioCodigo ? <div>
                    <Input name='emailOrPhone' id='emailOrPhone'
                        onChange={evento => handleChangeEnviar(evento)}
                        placeholder='correo' addonAfter={selectAfter} />
                </div> : <div>
                    <Input name='emailOrPhone' id='emailOrPhone'
                        onChange={evento => handleChangeEnviar(evento)}
                        placeholder='ingrese su numero te telefono'
                        addonBefore="+57" />
                </div>}


                <Button className='mt-3 w-100' type='primary' onClick={() => handleChangeEnviarCodigo(true)}>Enviar código</Button>
                <Button type="link" className='w-100 mt-2' onClick={() => props.setCambioContrasena()}>Volver a inicio sesión</Button>

                {getModal ? <ComponentsVerificarCodigo
                    getValorModalAbrir={getModal}
                    setAbrirModalFuntion={handleChangeEnviarCodigo} /> : null}
            </div>
        </div>
    )
}

export default ComponentsCambioContrasena;