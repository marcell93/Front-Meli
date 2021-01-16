import * as React from 'react';
import { FC, ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    <div>
      <p>Buscador</p>
      <input type='text' maxLength={40} value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={onClickSearch}>Buscar</button>
    </div>
  )
};

export default TopBar;
