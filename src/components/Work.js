import React, {useState, useRef} from 'react';
import Noframework from '../components/Noframework';
import React1 from '../components/React1';
import Angular from '../components/Angular';
import Node from '../components/Node';
import Python from '../components/Python';
import All from '../components/All';
import NavBar from './NavBar';


const Work = () => {
    const [tab, setTab] = useState(0);
    const tabRef = useRef(null)
    

    const onSetTabs = (tab) => {
        setTab(tab)
        let tabList = Array.from(tabRef.current.children)

        tabList.map((child) => {
            return child.classList.remove('active1')
        })
        tabList[tab].classList.add('active1')
    }
    return (
        <div>
            <div className="project">
                <h1 className="proh">Projects</h1>
                <nav className="pronav" ref={tabRef} >
                    <span onClick={ () => (onSetTabs(0))} className="navproitem active1">HTML | CSS | Javascript</span>
                    <span onClick={ () => (onSetTabs(1))} className="navproitem">React</span>
                    <span onClick={ () => (onSetTabs(2))} className="navproitem">Angular</span>
                    <span onClick={ () => (onSetTabs(3))} className="navproitem">Node</span>
                    <span onClick={ () => (onSetTabs(4))} className="navproitem">Python</span>
                    <span onClick={ () => (onSetTabs(5))} className="navproitem">All</span>

                </nav>
                { tab === 0 ? <Noframework /> : tab === 1 ? <React1 /> : tab === 2 ? <Angular /> :
                 tab === 3 ? <Node /> : tab === 4 ? <Python /> : <All />  }
            </div> 
            <NavBar></NavBar>
        </div>
    );
}

export default Work;
