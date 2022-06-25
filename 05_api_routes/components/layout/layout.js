import { Fragment, useContext } from 'react';

import MainHeader from './main-header';
import Notification from '../notification/notification';
import notificationContext from '../../store/notification-context';

function Layout(props) {
  const notificationCtx = useContext(notificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
