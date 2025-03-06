import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Type de la base
      host: 'localhost', // Adresse de la base
      port: 5432, // Port par défaut de PostgreSQL
      username: 'postgres', // Ton utilisateur PostgreSQL
      password: 'motdepasse', // Ton mot de passe PostgreSQL
      database: 'eventify', // Nom de ta base de données
      autoLoadEntities: true, // Charge les entités automatiquement
      synchronize: true, // ⚠️ Active la synchro automatique en dev (désactive en prod)
    }),
  ],
})
export class AppModule {}
