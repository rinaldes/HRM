class CreateAdmins < ActiveRecord::Migration
  def change
    create_table :admins do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :image
      t.string :password_hash
      t.string :password_salt

      t.timestamps
    end
  end
end
