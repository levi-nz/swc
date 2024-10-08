import { Entity, Column } from "typeorm";
import { Field, ObjectType, registerEnumType } from "type-graphql";
import { Enum1, Enum2 } from "./enum.js";

export enum Enum3 {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
}

registerEnumType(Enum3, { name: "Enum3" });

@Entity("user", { schema: "public" })
@ObjectType("User")
export class User {
    @Column({ name: "first_name" })
    @Field({ nullable: true })
    firstName?: string;

    @Column({ name: "last_name" })
    @Field({ nullable: true })
    lastName?: string;

    @Field()
    get fullName(): string {
        if (!this.firstName && !this.lastName) {
            return "";
        }
        return `${this.firstName} ${this.lastName}`.trim();
    }

    @Column()
    @Field(() => Enum1)
    enum1: Enum1;

    @Column()
    @Field(() => Enum2)
    enum2: Enum2;

    @Column()
    @Field(() => Enum3)
    enum3: Enum3;
}
