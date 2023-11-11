
import { Input, Row, Col } from "antd"
import { ChangeEvent } from "react";

interface PropsCambio {
    handleChangeCambio: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CoponentsNuevaContrasena: React.FC<PropsCambio> = ({ handleChangeCambio }) => {

    return (<div>
        <label className="font-label-app" htmlFor="usuario">* Ingrese su nombre de usuario : </label>
        <br />
        <Input
            name="usuario" id="usuario"
            className="w-50" placeholder="Ingrese el nombre de usuario"
            onChange={(e) => handleChangeCambio(e)}
        />
        <hr />
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                <label className="font-label-app" htmlFor="contrasena">* Ingrese su contraseña : </label>
                <Input.Password name="contrasena" id="contrasena"
                    className="w-100" placeholder="Ingrese el nombre de usuario"
                    onChange={(e) => handleChangeCambio(e)}
                />
            </Col>
            <Col className="gutter-row" span={12} >
                <label className="font-label-app" htmlFor="verificar">* Vuelva a ingresar la contraseña : </label>
                <Input.Password name="verificar" id="verificar"
                    className="w-100" placeholder="Ingrese el nombre de usuario"
                    onChange={(e) => handleChangeCambio(e)}
                />
            </Col>
        </Row>
        <hr />
    </div>)
}

export default CoponentsNuevaContrasena