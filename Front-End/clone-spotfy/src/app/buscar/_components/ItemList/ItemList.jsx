
import Link from 'next/link';
import SingleItem from '../SingleItem/SingleItem'

const ItemList = ({title, items, itemsArray, path, idPath}) => {
  
  return (
    <div className="item-list">
    <div className="item-list__header">
      <h2 className='item-list__title'>
        {title}
      </h2>
      <Link href={path} className='font-semibold text-1xl'>
        Ver tudo
      </Link>
    </div>

    <div className='item-list__container'>

      {
        itemsArray.filter((item, index) => index <= items).map((item, index) => (
          <SingleItem 
            key={`${title}-${index}`} 
            idPath={idPath}
            {...item}
          />
        ))
        // Fill significa preencher, e o underline significa que não vamos usar o valor dele
      }
      
    </div>
  </div>
  );
};
export default ItemList;