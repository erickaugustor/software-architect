import { Movie } from 'src/entity/Movie';
import { Resolver, Mutation, Arg, Int, Query, InputType, Field } from 'type-graphql';

@InputType()
class MobieInput {
  @Field()
  title: string

  @Field(() => Int)
  minutes: number
}

@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  async createMovie(
    @Arg('title', () => String, { nullable: true}) title: string | null,
    @Arg('minutes', () => Int) minutes: number,
  ) {
    await Movie.insert({ title, minutes })
    console.log(title)
    return true;
  }

  @Query(() => [Movie])
  async movies() {
    return Movie.find();
  }
}