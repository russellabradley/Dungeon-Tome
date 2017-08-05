class BaseSerializer < ActiveModel::Serializer
  attributes :id

  embed :objects
end
