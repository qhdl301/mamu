import FormDialog from "./FormDialog"


export default {
    title:'components/FormDialog'
}

export const Default = ()=>{

    return (
        <FormDialog type={''} open={true} onFormDialogSubmitClick={()=>{alert('')}} onFormDialogCloseClick={()=>{alert('sdsd')}}/>
    )
}