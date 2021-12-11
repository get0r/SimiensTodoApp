import { toast } from 'tailwind-toast';

const Toast = (title, message) => {
    return (
        toast()
            .warning(title, message)
            .with({
                shape: 'pill',
                duration: 3000,
                speed: 1000,
                positionX: 'end',
                positionY: 'top',
                color: 'bg-red-800',
                fontColor: 'red',
                fontTone: 200
            }).show()
    );
};

export default Toast;
