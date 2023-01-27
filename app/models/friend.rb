class Friend < ApplicationRecord
    validates :name, presence: true
    validates :age, presence: true
    validates :email, presence: true
    
end
