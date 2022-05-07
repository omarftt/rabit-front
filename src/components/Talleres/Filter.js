import React, {useEffect} from 'react'

function Filter({setActiveFilter,activeFilter,setFiltered,talleres}) {

    useEffect(() => {
        if(activeFilter === 0){
            setFiltered(talleres)
            return;
        }
        const filtered = talleres.filter((taller) => { 
            return taller.edadCode.includes(activeFilter)
        })
        
        setFiltered(filtered);
    },[activeFilter]);

    const buttonClass = "btn btn-outline-success button-100 rounded-3"

  return (
    <div className="btn-group rounded-3 border border-2 border-success" role="group" >
                                                
        <button 
            className={activeFilter === 1 ? buttonClass + " active" : buttonClass}
            onClick={() => setActiveFilter(1)}>
                <strong>5-7 años</strong>
        </button>
                        
        <button 
            className={activeFilter === 2 ? buttonClass + " active" : buttonClass}
            onClick={() => setActiveFilter(2)}>
                <strong>8-9 años</strong>
        </button>
                        
        <button 
            className={activeFilter === 0 ? buttonClass + " active" : buttonClass}
            onClick={() => setActiveFilter(0)}>
                <strong>TODOS</strong>
        </button>

        <button 
            className={activeFilter === 3 ? buttonClass + " active" : buttonClass}
            onClick={() => setActiveFilter(3)}>
                <strong>10-12 años</strong>
        </button>
        
        <button
            className={activeFilter === 4 ? buttonClass + " active" : buttonClass} 
            onClick={() => setActiveFilter(4)}>
                <strong>13-17 años</strong>
        </button>

    </div>
  )
}

export default Filter