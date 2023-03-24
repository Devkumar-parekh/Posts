import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setDashboardLoading } from '../actions/dashboardActions';

function Dashboard(props) {
  // const select = useSelector})
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   props.setDashboardLoading(true)
  //   return () => {
  //    props.setDashboardLoading(false)
  //   }
  // }, [])
  const onStartLoading = () => {
    props.setDashboardLoading(true)
  }
  const onStopLoading = () => {
    props.setDashboardLoading(false)
  }
  console.log('loading', props.dashboard.loading)
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={onStartLoading}>Start</button>
      <button onClick={onStopLoading}>Stop</button>
    </>
  );
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard
})
export default connect(mapStateToProps, { setDashboardLoading })(Dashboard);
