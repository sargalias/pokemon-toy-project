import React, { memo } from 'react';
import { Pokemon } from '@/Pokemon.model';
import { Card, CardContent, LinearProgress } from '@mui/material';
import Image from 'next/image';
import styles from './PokemonCard.module.scss';

const normaliseStat = (value: number): number => (value * 100) / 255;

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = memo(function PokemonCard({ pokemon }: PokemonCardProps) {
  const { id, name, stats, types } = pokemon;

  const typeStr = types.map((type) => type.name).join(', ');

  return (
    <Card className={styles.PokemonCard}>
      <Image
        src={`/sprites/${id}.svg`}
        alt={name}
        width="128"
        height="128"
        className={styles.PokemonCard_Image}
      />
      <CardContent className={styles.PokemonCard_Content}>
        <h2
          className={styles.PokemonCard_name}
          id={`PokemonCard_Heading_${id}`}
        >
          {name}
        </h2>
        <p>
          <strong>Type:</strong> {typeStr}
        </p>
        <p className="sr-only">
          <strong>Stats:</strong>
        </p>
        <ul className={styles.PokemonCard_Stats}>
          {stats.map((stat) => {
            return (
              <li key={stat.name} className={styles.PokemonCard_Stat}>
                {stat.name}: {stat.base_stat}
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
});

export default PokemonCard;
