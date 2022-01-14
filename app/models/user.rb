class User < ApplicationRecord
    has_secure_password
    
    has_many :books 

    validates :username ,presence: true, uniqueness: true
    # validates :password ,presence: true, uniqueness: true,length:{minimum: 6}
    # validates :age, presence: true
end
