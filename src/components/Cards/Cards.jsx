import styles from './Cards.scss';

const Cards = ({results}) => {

    let display = [];
    
    if(results){
        
        results.forEach((x) => {
            let {id, image, name, species, gender, origin, location, status } = x;
            
            display.push(
                <div key={id} className="col-5 cards">
                    <div className="border border-primary rounded-3 my-3 mx-1 position-relative">
                        <img src={image} alt="" className="img-fluid w-100" />

                        <div className="content p-3">
                            <div className="fs-4 fw-bold mb-3">{name}</div>
                            <div className="">Species : {species}</div>
                            <div className="">Gender : {gender}</div>

                            <div className="origin fw-bold mt-3"> Origin :
                                <div className="fw-normal">Name : {origin.name}</div>
                            </div>

                            <div className="origin fw-bold mt-3"> Location :
                                <div className="fw-normal"> {location.name}</div>
                            </div>    

                        </div>
                        {(() => {
                            if(status === "Dead"){
                                return(
                                    <span className={`${styles.badge} position-absolute badge bg-danger`}>{status}</span>
                                );
                            }
                            else if(status === 'Alive'){
                                return(
                                    <span className={`${styles.badge} position-absolute badge bg-success`}>{status}</span>
                                );
                            }
                            else{
                                return(
                                    <span className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</span>
                                );
                            }
                        })()}
                        
                    </div>

                </div>
            )
        })

        
    }else{
        display = "No Characters Found";
    }

  return (
    <>{display}</> 
  )
}

export default Cards
