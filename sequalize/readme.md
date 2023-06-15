Sequelize provides 4 types of associaltions to create a relation like one to one one to many and many to many

HasOne
BelongsTo
HasMany
BelongsToMany

all accept object as a second parameter and it have an option it is optional for the first three but for the last one it requires atleast through property

A.hasOne(B, { /_ options _/ });

here a is the source model and b is the target model

to create an one to one relationship HasOne and BelongsTo is used together
to create an one to many relationship HasMany and BelongsTo associations is used together
to create a many to many relationship two BelongsToMany calls used together

// orders --> customer id and item id fk
// customer
// items

// to get basic structure
npx sequelize-cli init
to create a model in sequelize
npx sequelize-cli model:generate --name ModelName --attributes firstName:string

customer table user id same as education field
