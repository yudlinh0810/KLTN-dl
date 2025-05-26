import styles from "../styles/connection.module.scss";
import logo from "../assets/images/ketnoi_new2.svg"

const Connection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>KẾT NỐI VEXETIENICH</h2>
      <p className={styles.description}>
        Kết nối với chúng tôi qua: mua vé Xe Khách, Xe Buýt, Xe Hợp Đồng, Giao Hàng,...
      </p>
      <div className={styles.itemList}>
        <img  src={logo}/>
      </div>
    </section>
  );
};

export default Connection;
