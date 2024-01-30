import AccordianNestCards from "./AccordianNestCards";

const AccordianCardList = (props) => {
    const resItemDataListInfo = [];
    const {resItemData} = props;
    if(resItemData){
        const resItemDataList =  resItemData.map((res)=>(res.card.info));
        resItemDataListInfo.push(resItemDataList)
    }
    else{
        return false
    }    
    
    return  <>
        <div className="accordianCardsListMainCon">                
                <div className="accordianCardsListInnerCon">
                    <AccordianNestCards resNestedCard={resItemDataListInfo}/>
                   
                  {/* <div className="accordianCardsListLeft">
                    <p className="smallIconHere"></p>
                    <h3>Achari Khichdi</h3>
                    <h6>149/-</h6>
                    <p>
                      Serves 1 | Mighty khichdi with playful achari flavour &
                      spices for a perfect joyride of tastefulness. Served with
                      Pickle, Gur & Papad Churi. Served with Pickle of the day
                      Allergen Information- Contains Dairy
                    </p>
                  </div>
                  <div className="accordianCardsListRight">
                    <img
                      alt="dish Image"
                      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b5678129d8f9f81b8e2849cf033aebe6"
                    ></img>
                  </div> */}
                </div>
              </div>
        </>
}

export default AccordianCardList;