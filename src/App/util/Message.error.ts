import React, { useEffect } from 'react';
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface Notificacion { 
    show: boolean, 
    type: NotificationType,
    actualizarNotificacion : (entrada: boolean) => void
}

const MessageAlert: React.FC<Notificacion> = ({ show, type, actualizarNotificacion }) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = () => {
        api[type]({
            message: 'Error, credenciales incorrectas',
            description: 'Señor usuario, por favor ingrese bien sus credenciales de acceso.',
            onClose: () => actualizarNotificacion(false)
        });
    };

    useEffect(() => {
        if (show) {
            openNotificationWithIcon();
        }
    }, [show]);

    return contextHolder;
};

export default MessageAlert;
