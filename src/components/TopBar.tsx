import * as React from 'react';
import { FC, ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
const mlLogo = require('./../assets/img/Logo_ML.png');
const searchImg = require('./../assets/img/ic_Search.png');

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#FFE600',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
  },
  searchBtn: {
    width: '30px',
    height: '30px',
    padding: 0
  },
  searchInput: {
    width: '100%',
    height: '24px',
    minWidth: '135px',
    marginLeft: '15px'
  }
});

const TopBar: FC = (): ReactElement => {
  const history = useHistory();
  const [search, setSearch] = useState<string>('');

  const onClickSearch = () => {
    if (search) {
      history.push('/items?search=' + search);
    } else {
      history.push('/');
    }
  }

  return (
    <div className={css(styles.topBar)}>
      <div className={css(styles.container)}>
        <img src={mlLogo.default} height='30px' />
        <input type='text' className={css(styles.searchInput)} maxLength={50} placeholder='Nunca dejes de buscar' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={onClickSearch} className={css(styles.searchBtn)}>
          <img src={searchImg.default} />
        </button>
      </div>
    </div>
  )
};

export default TopBar;
