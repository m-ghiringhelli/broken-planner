import { useContext } from 'react';
import { PlannerContext } from '../../context/PlannerContext';
import styles from './Header.css';

export default function Header() {
  const entries = useContext(PlannerContext).entries.length;

  return (
    <header className={styles.header}>
      <h2>My Planner</h2>
      {/* TODO: Replace hard-coded count with the actual number of entries */}
      <span>
        {entries} Item{entries === 1 ? '' : 's'} Left
      </span>
    </header>
  );
}
