# == Schema Information
#
# Table name: certificates
#
#  id          :bigint(8)        not null, primary key
#  description :string(255)
#  name        :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :bigint(8)
#
# Indexes
#
#  index_certificates_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

require 'rails_helper'

RSpec.describe Certificate, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
