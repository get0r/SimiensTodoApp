import { toast } from 'tailwind-toast';

const Toast = (title, message) => {
    return (
        toast()
            .warning(title, message)
            .with({
                duration: 2000,
                speed: 1000,
                positionX: 'end',
                positionY: 'top',
                color: 'bg-red-800',
                fontColor: 'red',
                fontTone: 200,
            }).show()
    );
};

export default Toast;
