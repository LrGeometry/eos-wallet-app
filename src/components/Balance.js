import React, { Component } from 'react';

class Balance extends Component {
 static defaultProps = {
   className: 'account-info logged-in p-4',
   styles: {
     primary: 'nav-primary',
     balance: 'balance',
     change: 'change',
   },
   account: {
     value: {
       belongsTo: ['My', ''],
     },
     formattedBalance: '0.500',
     priceUpdate: '+27.600',
   },
 }

 render() {
   const { account, className, styles } = this.props;

   return (
     <div className={className}>
       <div className={styles.primary}>{account.value.name} EOS</div>
       <div className={styles.balance}>{account.formattedBalance}</div>
       <div className={styles.change}>{account.priceUpdate}</div>
     </div>
   );
 }
}

export default Balance;
