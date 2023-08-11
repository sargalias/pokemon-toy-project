import { Pokemon } from '@/Pokemon.model';
import { Card, CardContent, CardMedia, LinearProgress } from '@mui/material';
import Image from 'next/image';
import styles from './PokemonCard.module.scss';

const normaliseStat = (value: number): number => (value * 100) / 255;

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name, stats, types } = pokemon;

  const typeStr = types.map((type) => type.type.name).join(', ');

  return (
    <Card className={styles.PokemonCard}>
      <Image
        src={`/sprites/${id}.svg`}
        alt=""
        width="128"
        height="128"
        className={styles.PokemonCard_Image}
      />
      <CardContent className={styles.PokemonCard_Content}>
        <h2 className={styles.PokemonCard_name}>{name}</h2>
        <p>
          <strong>Type:</strong> {typeStr}
        </p>
        <p>
          <strong>Stats:</strong>
        </p>
        <ul className={styles.PokemonCard_Stats}>
          {stats.map((stat) => {
            return (
              <li key={stat.stat.name} className={styles.PokemonCard_Stat}>
                {stat.stat.name}: {stat.base_stat}
                <LinearProgress
                  className={styles.PokemonCard_StatBar}
                  variant="determinate"
                  value={normaliseStat(stat.base_stat)}
                />
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
