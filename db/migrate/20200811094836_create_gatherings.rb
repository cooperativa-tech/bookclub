class CreateGatherings < ActiveRecord::Migration[6.0]
  def change
    create_table :gatherings do |t|
      t.date :date, null: false
      t.string :special_presentation

      t.timestamps
    end
  end
end
