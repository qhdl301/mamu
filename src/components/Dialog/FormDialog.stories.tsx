import FormDialog from "./FormDialog"


export default {
    title:'components/FormDialog'
}

export const Default = ()=>{

    return (
        <FormDialog open={true} onFormDialogSubmitClick={()=>{}} onFormDialogCloseClick={()=>{}}/>
    )
}