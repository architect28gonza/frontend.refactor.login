import React, { ChangeEvent, useState } from 'react';
import { Modal, Col, Row } from 'antd';
import CoponentsNuevaContrasena from './ComponentsNuevaContrasena';
import { useDispatch } from 'react-redux';
import { handleCambioContrasena } from '../../features/login/CambioContrasena.Slice';
interface PropsVerificar {
    getValorModalAbrir: boolean
    setAbrirModalFuntion: (entrada: boolean) => void;
}

const ComponentsVerificarCodigo: React.FC<PropsVerificar> = ({ getValorModalAbrir, setAbrirModalFuntion }) => {
    const dispatch = useDispatch();

    const [getEscribirContrasena, setEscribirContrasena] = useState<boolean>(true)
    const [getNuevaContrasena, setNuevaContrasena] = useState({
        "usuario": "",
        "contrasena": "",
        "verificar": ""
    })

    const handleChangeCambio = (e: ChangeEvent<HTMLInputElement>) => setNuevaContrasena({ ...getNuevaContrasena, [e.target.name]: e.target.value })

    const handleOk = (entrada: boolean) => {
        if (entrada) {
            const inputs = document.querySelectorAll('[id^="id"]')
            let codigoEnviar = "" as string;
            inputs.forEach((input) => {
                const valor = input as HTMLInputElement
                const valorInput = valor.value;
                codigoEnviar = codigoEnviar.concat(valorInput)
            })
            setEscribirContrasena(false)
            // setAbrirModalFuntion(false)
        }
    }

    const handleGuardarContrasena = () => {
        dispatch(handleCambioContrasena(getNuevaContrasena))
    }


    const lstIdInputsCodigo = [
        "id1", "id2", "id3",
        "id4", "id5", "id6"
    ]


    const nextElementoInput = () => {
        const elementosEnfocables = document.querySelectorAll('input');
        const listaElementos = Array.from(elementosEnfocables);
        const elementoActual = document.activeElement as HTMLInputElement;
        const indiceActual = listaElementos.indexOf(elementoActual);
        const indiceSiguiente = (indiceActual + 1) % listaElementos.length;
        const elementoSiguiente = listaElementos[indiceSiguiente];
        if (elementoSiguiente) {
            elementoSiguiente.focus();
        }
    }


    const handleChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const target = e.target as HTMLInputElement
        const valor = target.value
        const input = document.getElementById(target.id) as HTMLInputElement;
        if (valor.length > 1) {
            if (input != null) {
                const { value } = input
                input.value = value[0]
            }
        }
        if (valor.length === 1) {
            nextElementoInput()
        }
    }

    const inputsCodigo = () => {
        return <Row>
            {lstIdInputsCodigo.map(input => {
                return <Col span={4} key={input}>
                    <input id={input}
                        onChange={(e) => handleChangeMax(e)}
                        className='text-center font-label-app'
                        placeholder='X'
                        style={{ width: "90%", fontSize: 17, fontWeight: 'bold', borderRadius: 5 }} />
                </Col>
            })}
        </Row>
    }

    return (
        <div className="verificar-codigo">
            <Modal title={<span className='font-label-app-title'>INGRESAR CÓDIGO</span>}
                open={getValorModalAbrir}
                onOk={() => getEscribirContrasena ? handleOk(true) : handleGuardarContrasena()}
                okText={getEscribirContrasena ? "Verificar" : "Guardar nueva contraseña"}
                onCancel={() => setAbrirModalFuntion(false)}>
                {getEscribirContrasena ?
                    <div>
                        <hr />
                        {inputsCodigo()}
                        <hr />
                        <small style={{ color: 'rgb(134, 134, 134)', fontStyle: 'italic' }}>
                            Recuerde que este código solo tiene una duración de <b>2 minutos</b>, por tanto si
                            intenta usar algun código pasado de estos minutos no tendra validez.</small>
                    </div> : <CoponentsNuevaContrasena handleChangeCambio={handleChangeCambio} />
                }
            </Modal>
        </div>
    )
}

export default ComponentsVerificarCodigo;