import { useDispatch } from 'react-redux'
import { handlerLogin } from '../../App/features/login/loginSlice';

import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Card, Col, Row, Button, Checkbox, Carousel } from 'antd'
import imgLoginBack from '../../App/assets/img/6922718_23667.jpg'
import iconLoginMain from '../../App/assets/icon/20547283_6310507.jpg'
import Carousel1 from '../../App/assets/img/HD-wallpaper-medical-hospital.jpg'

import {
   contentStyle,
   getPropertyCssCentrar,
   getPropertyCssCentrarLogin,
   getPropertyCssLogin,
   setCentrarImgLogin
} from '../../App/styles/login.styles';
import ComponentsCambioContrasena from '../../App/components/login/ComponentsCambioContrasena';
import { ChangeEvent, useState } from 'react';
import { useGetLoginUsuarioMutation } from '../api/login.api';
import { setValidarStatusResponse } from '../util/validarStatusResponse';
import MessageAlert from '../util/Message.error';

const Login = () => {
   const [iniciarSesion] = useGetLoginUsuarioMutation()

   const dispatch = useDispatch();

   const [getCambioContrasena, setCambioContrasena] = useState<boolean>(true)
   const [getNotificacionError, setNotificacionError] = useState<boolean>(false)
   const [getLogin, setLogin] = useState({ "usuario": "", "contrasena": "" })


   const cambiarVentanaCambio = (): void => setCambioContrasena(true)
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => setLogin({ ...getLogin, [e.target.name]: e.target.value })
   const handleChangeLogin = () => {
      dispatch(handlerLogin(getLogin))
      iniciarSesion(getLogin)
         .then(res => {
            const isCorrecto: boolean = setValidarStatusResponse(res)
            if (!isCorrecto) {
               setNotificacionError(true)
            }
         })
         .catch(({ error }) => console.error(error))
   }

   const getIconVerContrasena = (visible: boolean) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)
   const actualizarNotificacion = (entrada: boolean) => setNotificacionError(entrada)

   const getTitleCardLogin = () => <p className='w-100 text-center font-label-app'
      style={{ fontSize: 20, fontWeight: 'bold' }}>INICIO DE SESIÓN</p>

   return (
      <div style={getPropertyCssLogin(imgLoginBack)} className="App">
         <div style={getPropertyCssCentrar}>
            <div style={getPropertyCssCentrarLogin}>
               <Row>
                  <Col span={15}>
                     <div>
                        <Carousel style={contentStyle}>
                           <div>
                              <div style={setCentrarImgLogin}>
                                 <img src={Carousel1} className='img-fluid p-3' style={{ borderRadius: '25px' }} alt="Carousel1" />
                              </div>
                              <h4 className='font-label-app h5'> INFORMACIÓN </h4>
                              <hr />
                              <div className='p-2'>
                                 <p className='text-center font-label-app' style={{ fontSize: 15 }}>
                                    En nuestro sistema médico, nos enorgullece asegurarte que estamos comprometidos en proporcionarte la mejor atención. Tu salud y bienestar son nuestra principal prioridad, y trabajamos incansablemente para garantizar que recibas el más alto nivel de cuidado y servicio.
                                 </p>
                              </div>
                              <Button type="link" className='w-100'>Ver mas información</Button>
                           </div>
                        </Carousel>
                     </div>
                  </Col>
                  <Col span={9} style={{ background: 'rgba(5, 11, 47, 0.2)' }} >

                     {getCambioContrasena ?
                        <Card style={{ borderRadius: '0px 7px 8px 0px', width: '100%', height: '92vh' }} title={getTitleCardLogin()}>
                           <MessageAlert
                              actualizarNotificacion={actualizarNotificacion}
                              show={getNotificacionError}
                              type="error" />

                           <div style={setCentrarImgLogin}>
                              <img src={iconLoginMain} style={{ height: 200 }} className='img-fluid' alt="IconMainLogin" />
                           </div>

                           <label htmlFor="id-nombre-usuario" className='font-label-app'>Nombre de usuario : </label>
                           <Input
                              name='usuario'
                              onChange={evento => handleChange(evento)}
                              id='id-nombre-usuario'
                              placeholder="Nombre de usuario"
                              prefix={<UserOutlined />} />

                           <hr />

                           <label htmlFor="id-contrasena" className='font-label-app'>Contraseña : </label>
                           <Input.Password
                              name='contrasena'
                              onChange={evento => handleChange(evento)}
                              id='id-contrasena'
                              placeholder="Contraseña"
                              iconRender={(visible) => getIconVerContrasena(visible)}
                           />

                           <Checkbox className='mt-3 font-label-app'>Recordar contraseña</Checkbox>
                           <Button type="primary" disabled={(getLogin.usuario == "" || getLogin.contrasena == "")} className='mt-3 w-100' onClick={() => handleChangeLogin()}>Iniciar sesión</Button>
                           <Button type="link" className='w-100 mt-2' onClick={() => setCambioContrasena(false)}>Cambiar contraseña</Button>
                        </Card>
                        : <ComponentsCambioContrasena setCambioContrasena={cambiarVentanaCambio} />
                     }
                  </Col>
               </Row>
            </div>
         </div>
      </div>
   )
}

export default Login;