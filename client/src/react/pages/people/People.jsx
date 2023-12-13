import { Grid } from '@mui/material';
import UserCard from '../../components/UserCard/UserCard';
import { useGetUsersQuery } from '../../../redux/api/apiSlice';

const People = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, md: 12 } }>
      {isLoading ?
        'Loading' :
        data?.map(user => <UserCard item xs={ 2 } md={ 4 } key={ user._id } user={ user } />)}
    </Grid>
  );
};

export default People;
