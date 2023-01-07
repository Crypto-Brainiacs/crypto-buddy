import ReactDOM from 'react-dom'
import {useState, useEffect} from 'react'

let Z_INDEX = 1000

export const notify = ({message = '', onReady, callback, onSucceed, type = 'light', duration = 3500}) => {
    const Notify = () => {
        const [doubleLine, setDoubleLine] = useState(true)
        const id = `_notify_`

        useEffect(() => {
            typeof onReady === 'function' ? onReady() : false;
            setTimeout(() => {
                typeof callback === 'function' ? (
                    callback(type)
                ) : false;

                typeof onSucceed === 'function' && type === 'success' ? (
                    onSucceed(type)
                ) : false;

                ReactDOM.unmountComponentAtNode(
                    document.querySelector(`#__popup`)
                )
            }, duration);
        }, [])

        return (
            <div id = {id} className = 'p-5 po-fixed top-0 left-0 w-100' style = {{zIndex: Z_INDEX += 10}}>
                <div className = {`animated dg-${type}-light slideInRight a-i-c p-2 rounded-1x shadow ml-auto flex-h pop-up`} style = {{maxWidth: '500px'}}>
                    <div className = {`px-4 py-3 border-white h-100 border-right`}>
                        <span className = {`bi fo-s-22 bi-${type === 'success' ? 'check-circle-fill' : type === 'danger' ? 'exclamation-triangle-fill' : 'exclamation-circle-fill'} text-white`}></span>
                    </div>
                    <div className="flex-1 py-4">
                        <div onClick = {() => setDoubleLine(!doubleLine)} className={`${!doubleLine ? '' : 'double-line'} my-2 text-white fo-s-15 bold h-100 flex-v j-c-c px-4`}>
                            {message}
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .dg-danger-light{
                        background-color: #000;
                    }
                    .text-danger-dark{
                        color: #fff;
                    }
                    .dg-success-light{
                        background-color: #000;
                    }
                    .text-success-dark{
                        color: #fff;
                    }
                    .dg-notify-light{
                        background-color: #000;
                    }
                    .text-notify-dark{
                        color: #fff;
                    }
                `}</style>
            </div>
        )
    }

    if(!document.querySelector('#_notify_')){
        ReactDOM.render(
            <Notify className='bg-danger-light' />,
            document.querySelector('#__popup')
        )
    }
}