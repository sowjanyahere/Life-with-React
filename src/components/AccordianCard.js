import AccordianCardList from "./AccordianCardList";
const AccordianCard = (props) => {
    const {resData} = props;
    // const {title,itemCards} = resData.card.card;
    
    return <>
        <div className="accordianCards">                
              <h2 className="accordianTittle">{resData.card.card.title}</h2>
              <AccordianCardList resItemData={resData.card.card.itemCards} />
             
        </div>
           </>
    
              
}

export default AccordianCard;