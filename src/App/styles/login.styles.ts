export const getPropertyCssLogin = (img: string) => {
    return {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
    }
}

export const getPropertyCssCentrar: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh'
}

export const getPropertyCssCentrarLogin: React.CSSProperties = {
    position: 'absolute',
    borderLeft: '1px solid white',
    borderRadius: '10px',
    width: '70%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 5px 7px #00000029',
}

export const setCentrarImgLogin = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export const contentStyle: React.CSSProperties = {
    height: '92vh',
    textAlign: 'center',
    background: 'linear-gradient(90deg, rgba(255,255,255,0) 73%, rgba(228,244,252,1) 100%, rgba(2,0,36,1) 100%)'
 };

