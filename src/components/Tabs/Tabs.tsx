import { FC } from 'react';
import '../../statics/win95.css';

type TabTypes = {
    tabs: {
        id: string,
        href: string,
        value: string,
        ariacontrols : string,
    },
    contents: {
        id: string,
        arialabelledby: string,
        value: string,
    }
}

export type TabsProps = {
    componentData: TabTypes[],
}

const Tabs:FC<TabsProps> = (props) => {

    const [{ tabs, contents }] = props.componentData;
    
    return (
        // class component의 class attribute는 className으로 바꿔서 사용가능  
        <>    
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id={ tabs.id } data-toggle="tab" href={ tabs.href } role="tab" aria-controls={ tabs.ariacontrols } aria-selected="true">{ tabs.value }</a>
                        {/*
                            active : active클래스를 붙여, 활성화된 스타일로 변경한다.
                            aria-controls : 해당 Elemnet로 제어하는 대상을 식별한다. 연관 된 Element의 id 값을 이용
                            aria-selected : 선택하여 해당 Elemet를 활성화 한다.  */}
                    </li>
                
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane show active" id={ contents.id } role="tabpanel" aria-labelledby={ contents.arialabelledby }>     { /* role : Element의 역할을 정의하여 목적을 가지게 한다*/}
                    <p>{ contents.value }</p>
                </div>
            </div>
        </>
    )

}


export default Tabs;