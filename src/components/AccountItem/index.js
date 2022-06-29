import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx("wrapper")}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/dfc02b4b999b36d75d49d474aa9f1eff~c5_100x100.jpeg?x-expires=1656572400&x-signature=uKfdg32jK4uHQaTfIlvIaZhBSyw%3D" alt="" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Pham Quang Dang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('username')}>conalVN</span>
            </div>
        </div>
     );
}
export default AccountItem;