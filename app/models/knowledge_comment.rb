class KnowledgeComment < ActiveRecord::Base
	belongs_to :user
	belongs_to :knowledge
end
