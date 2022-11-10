import './CardItem.css';

const CardItem = ({image, name, info}) => {
  return (
    <div class='card_item'>
       <div class='card_inner'>
         <div class='card_image'>
           <img src={image} alt={name}/>
         </div>
         <div class="card_text">{name}</div>
       </div>
       <div class='card_info'>
         <div class='card_name'>{name}</div>
         <div class='card_info'>{info}</div>
       </div>
    </div>
  );
}

export default CardItem;
