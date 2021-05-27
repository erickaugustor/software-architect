import { Movie } from 'src/entity/Movie';
import { Resolver, Mutation, Arg, Int, Query, InputType, Field, Args } from 'type-graphql';

@InputType()
class MovieInput {
  @Field()
  title: string | null

  @Field(() => Int)
  minutes: number
}

@Resolver()
export class MovieResolver {
  @Mutation(() => Movie)
  async createMovie(
    @Arg('title', () => String, { nullable: true}) title: string | null,
    @Arg('minutes', () => Int) minutes: number,
  ) {
    const movie = await Movie.create({ title, minutes }).save();
    return movie;
  }

  @Mutation(() => Boolean)
  async updateMovie(
    @Arg('id', () => Int) id: number,
    @Arg('options', () => MovieInput) options: MovieInput,
  ) {
    await Movie.update({ id }, options);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteMovie(
    @Arg('id', () => Int) id: number,
  ) {
    await Movie.delete({ id });
    return true;
  }

  @Query(() => [Movie])
  async movies() {
    return Movie.find();
  }
}