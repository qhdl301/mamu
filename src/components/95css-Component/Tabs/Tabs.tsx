import { FC } from 'react';
import '../../../statics/win95.css'

type TabTypes = {
    tabs: {
        id: string,
        href: string,
        value: string,
        ariacontrols: string,
        active: string,
        isariaselected: boolean
    },
    contents: {
        id: string,
        arialabelledby: string,
        value: string,
        active : string
    }
}

export type TabsProps = {
    componentData: TabTypes[],
}

const Tabs:FC<TabsProps> = (props) => {
    
    const { componentData } = props;
    const tabs = componentData.map((items)=> items.tabs);
    const contents = componentData.map((items) => items.contents);
   
    console.log(tabs);  

    return (
        <>    
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tabs.map((items, idx) => {
                    return(
                        <li className="nav-item" key= {idx}>
                            <a className={`nav-link ${items.active}`} id={items.id} data-toggle="tab" href={items.href} role="tab" aria-controls={items.ariacontrols} aria-selected= {items.isariaselected}>
                                { items.value }
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className="tab-content" id="myTabContent">
                {contents.map((items, idx) => {
                    return (
                        <div key={idx} className={`tab-pane show ${items.active}`} id={items.id} role="tabpanel" aria-labelledby={items.arialabelledby}>
                            <p>{ items.value }</p>
                        </div>
                    )
                })}
            </div>
        </>
    )

}


export default Tabs;