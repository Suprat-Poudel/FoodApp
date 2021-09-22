import classes from './OrderIndex.module.css';

const OrderIndex = (props) => {
  return (
    <li className={classes.destination}>
      <div>
       
        <h3>Order Id: {props.mid}</h3>
        <div>Name: {props.customerName}</div>
        <div>Phone No.: {props.city}</div>
        <div>PostalCode: {props.postalCode}</div>
        <div>Address: {props.street}</div>
        <div>Order :{props.food}</div>
        <div>Total Amount :&#8377;{props.total}</div>
      </div>
      <div>
       
      </div>
    </li>
  );
};

export default OrderIndex;